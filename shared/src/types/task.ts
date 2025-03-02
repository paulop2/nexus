export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  estimatedMinutes?: number;
  parentIds: string[];
  childIds: string[];
  priority: number;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
  resources?: Resource[];
  tags?: string[];
}

export interface Resource {
  id: string;
  type: 'LINK' | 'NOTE' | 'FILE';
  title: string;
  content: string;
  taskId: string;
}
