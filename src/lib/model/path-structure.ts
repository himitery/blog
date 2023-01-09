import _ from 'lodash';

export type PathData = {
  [key: string]: {
    page: boolean;
    children: PathData;
  };
};

export class PathStructure {
  private data: PathData = {};

  constructor(paths: string[]) {
    _(paths)
      .map((path) => path.split('/').splice(1))
      .orderBy((path) => path.length, ['desc'])
      .forEach((path) => this.setPath(path));
  }

  public value = (): PathData => {
    return this.data;
  };

  private makePath = (path: string[]): PathData => {
    return {
      [path[0]]: {
        page: path.length === 1,
        children: path.length === 1 ? {} : this.makePath(path.slice(1)),
      },
    };
  };

  private setPath = (path: string[]) => {
    this.data = _.merge(this.data, this.makePath(path));
  };

  static of(paths: string[]): PathStructure {
    return new PathStructure(paths);
  }
}
