import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

const DIST = path.resolve(process.cwd(), 'dist')
const ASSETS = path.join(DIST, 'assets')
const BROTLI_OPTIONS = { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } }
const GZIP_OPTIONS = { level: zlib.constants.Z_BEST_COMPRESSION }
const THRESHOLD = 10240 // bytes

function compressFile(filePath) {
  const stat = fs.statSync(filePath)
  if (stat.size < THRESHOLD) return

  const rel = path.relative(DIST, filePath)
  const brotliPath = path.join(DIST, rel + '.br')
  const gzipPath = path.join(DIST, rel + '.gz')

  const input = fs.readFileSync(filePath)

  // Brotli
  try {
    const brot = zlib.brotliCompressSync(input, BROTLI_OPTIONS)
    fs.writeFileSync(brotliPath, brot)
    console.log('brotli:', brotliPath)
  } catch (err) {
    console.error('brotli error:', filePath, err.message)
  }

  // Gzip
  try {
    const gz = zlib.gzipSync(input, GZIP_OPTIONS)
    fs.writeFileSync(gzipPath, gz)
    console.log('gzip:  ', gzipPath)
  } catch (err) {
    console.error('gzip error:', filePath, err.message)
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full)
    else if (e.isFile()) {
      if (/\.(js|css|html|svg|json)$/.test(e.name)) compressFile(full)
    }
  }
}

if (!fs.existsSync(DIST)) {
  console.error('dist directory not found. Run build first.')
  process.exit(1)
}

walk(DIST)
console.log('compression finished')
