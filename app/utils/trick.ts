export namespace utils {
    export interface Content {
        ja: string
        en: string
    }
    export interface Trick {
        name: Content
        note: Content
    }

    export interface Level {
        tricks: Trick[]
    }

    export interface Category {
        name: string
        levels: Level[]
    }
}

export function findTrickByName(categories: utils.Category[], name: string, locale: string): utils.Trick | null {
  for (const category of categories) {
    for (const level of category.levels) {
      for ( const trick of level.tricks ) {
        if (trick.name[locale] === name) {
          return trick
        }
      }
    }
  }
  return null;
}

export function findCategoryByName(categories: utils.Category[], name: string): utils.Category | null {
    for (const category of categories) {
        if (category.name === name) {
            return category;
        }
    }
    return null;
}

export function findCategoryLevel(categories: utils.Category[], categoryName: string, level: number): utils.Level | null {
    const category = findCategoryByName(categories, categoryName);
    if (!category) {
        return null;
    }
    return category.levels[level] || null;
}
