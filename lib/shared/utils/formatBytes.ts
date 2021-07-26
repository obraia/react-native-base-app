function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return { size: 0, unity: 'Bytes' };

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return { size: parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), unity: sizes[i] };
}

export default formatBytes;