export async function fetchWithTimeout(url: string, timeoutSeconds = 45) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutSeconds * 1000);

  try {
    await fetch(url, {
      signal: controller.signal,
      mode: 'no-cors'
    });
    return true;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}