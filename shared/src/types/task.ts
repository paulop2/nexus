// shared/types/task.ts

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  BLOCKED = 'blocked'
}

export enum TaskSize {
  LARGE = 'large',       // Needs breakdown
  MEDIUM = 'medium',     // May need breakdown
  SMALL = 'small'        // 2-5 minute task
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  size: TaskSize;
  estimatedMinutes: number;
  priorityScore?: number;  // Calculated by the graph algorithm
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  isRoot: boolean;        // Is this a top-level task?
  metadata?: {            // Additional metadata useful for AI
    context?: string;     // Context about the task
    aiGenerated: boolean; // Was this created via AI?
    attempts?: number;    // Number of breakdown attempts
  };
}

// Relationships between tasks
export enum RelationshipType {
  SUBTASK_OF = 'SUBTASK_OF',     // Hierarchical breakdown
  DEPENDS_ON = 'DEPENDS_ON',     // Sequential dependency
  BLOCKS = 'BLOCKS',             // This task blocks another
  RELATED_TO = 'RELATED_TO'      // Generic relationship
}

export interface TaskRelationship {
  sourceTaskId: string;
  targetTaskId: string;
  type: RelationshipType;
  weight?: number;        // For weighted relationships
  metadata?: Record<string, any>;
}