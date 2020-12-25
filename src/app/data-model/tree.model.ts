export class Tree {
  id: number;
  parentId?: number;
  name: string;
  url: string;
  children?: Tree[];
  isExpanded?: boolean;
}