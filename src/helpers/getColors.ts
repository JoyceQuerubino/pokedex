export const getColorHex = (colorName: string) => {
    switch (colorName.toLowerCase()) {
      case 'black':
        return '#1a1a1a'; 
      case 'blue':
        return '#76bfff'; 
      case 'brown':
        return '#bb9561'; 
      case 'gray':
        return '#A9A9A9';
      case 'green':
        return '#47d1b2';
      case 'pink':
        return '#FFC0CB';
      case 'purple':
        return '#9e81a9';
      case 'red':
        return '#fb6c6c'; 
      case 'white':
        return '#e5ebf3';
      case 'yellow':
        return '#fed86e';
      default:
        return '#e5ebf3'; 
    }
};
