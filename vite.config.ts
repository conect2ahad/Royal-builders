import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-projects-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/projects/')) {
            try {
              const decodedPath = decodeURIComponent(req.url.split('?')[0]);
              const publicFilePath = path.join(__dirname, 'public', decodedPath);
              const rootFilePath = path.join(__dirname, decodedPath);
              const targetPath = fs.existsSync(publicFilePath)
                ? publicFilePath
                : fs.existsSync(rootFilePath)
                ? rootFilePath
                : null;

              if (targetPath && fs.statSync(targetPath).isFile()) {
                const ext = path.extname(targetPath).toLowerCase();
                const mimeTypes: Record<string, string> = {
                  '.jpg': 'image/jpeg',
                  '.jpeg': 'image/jpeg',
                  '.png': 'image/png',
                  '.mp4': 'video/mp4',
                  '.webp': 'image/webp',
                  '.svg': 'image/svg+xml'
                };

                // Support range requests for video streaming (seeking, instant playback)
                if (ext === '.mp4') {
                  const stat = fs.statSync(targetPath);
                  const fileSize = stat.size;
                  const range = req.headers.range;

                  if (range) {
                    const parts = range.replace(/bytes=/, '').split('-');
                    const start = parseInt(parts[0], 10);
                    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
                    const chunksize = end - start + 1;
                    const file = fs.createReadStream(targetPath, { start, end });
                    res.writeHead(206, {
                      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                      'Accept-Ranges': 'bytes',
                      'Content-Length': chunksize,
                      'Content-Type': 'video/mp4'
                    });
                    file.pipe(res);
                    return;
                  } else {
                    res.writeHead(200, {
                      'Content-Length': fileSize,
                      'Content-Type': 'video/mp4',
                      'Accept-Ranges': 'bytes'
                    });
                    fs.createReadStream(targetPath).pipe(res);
                    return;
                  }
                }

                if (mimeTypes[ext]) {
                  res.setHeader('Content-Type', mimeTypes[ext]);
                }
                fs.createReadStream(targetPath).pipe(res);
                return;
              }
            } catch (err) {
              console.error('Error serving project file:', err);
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    host: true
  }
});
