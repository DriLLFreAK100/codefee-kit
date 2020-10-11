class StringHelper {
  static flatten(text: string): string {
    return text
      .replace(/(\r\n|\n|\r)/gm, ' ')
      .split(' ')
      .filter((x) => x)
      .join(' ');
  }
}

export default StringHelper;
