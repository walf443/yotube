
export function findTrickByName(categories: any, name: string): any {
  for (const category of categories) {
    for (const level of category.levels) {
      for ( const trick of level.tricks ) {
        if (trick.name === name) {
          return trick
        }
      }
    }
  }
  return null;
}
