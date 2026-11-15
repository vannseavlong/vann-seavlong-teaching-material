// Content model for every curriculum on the site.
// Contract and "how to add content": Docs/architecture/content-model.md

export type Status = "available" | "coming-soon";

export type Curriculum = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  /** Sort order on home and browse (low first) */
  order: number;
};

export type Level = {
  id: string;
  curriculumId: string;
  name: string;
  order: number;
};

export type Subject = {
  id: string;
  name: string;
};

export type Topic = {
  /** Unique inside its unit; for lesson topics this is the lesson anchor */
  id: string;
  title: string;
  /** Usually `<lesson>#<anchor>`; omitted when no lesson exists yet */
  href?: string;
  /** Track id from `Course.tracks`, e.g. "hl" */
  track?: string;
};

export type Unit = {
  /** Unique inside its course, e.g. "unit-1" */
  id: string;
  number?: number;
  title: string;
  description?: string;
  topics: Topic[];
  status: Status;
};

export type Course = {
  id: string;
  curriculumId: string;
  subjectId: string;
  /** Facets, not tree levels: a course may have none or several */
  levelIds: string[];
  title: string;
  shortTitle: string;
  description: string;
  /** Canonical page: "/aa" for IB AA, "/courses/<id>" for most courses */
  href: string;
  /** Word used for units on this course; default "Unit" */
  unitLabel?: "Unit" | "Chapter" | "Topic" | "Module";
  /** Optional study tracks, e.g. IB SL / HL */
  tracks?: { id: string; label: string }[];
  units: Unit[];
  status: Status;
};

export type ResourceKind =
  | "lesson"
  | "topic-exercise"
  | "worksheet"
  | "quiz"
  | "test"
  | "exam-style"
  | "mock"
  | "revision"
  | "formula-sheet"
  | "reference";

export type Difficulty = "foundation" | "standard" | "challenge";

export type Resource = {
  /** Globally unique */
  id: string;
  kind: ResourceKind;
  title: string;
  /** One specific line; may be empty when the title and facts say enough */
  description: string;
  courseId: string;
  unitId?: string;
  topicIds?: string[];
  href: string;
  status: Status;
  difficulty?: Difficulty;
  marks?: number;
  questionCount?: number;
  durationMinutes?: number;
  /** true = calculator allowed, false = no calculator, undefined = not stated */
  calculator?: boolean;
  hasAnswers: boolean;
  interactive?: boolean;
  printable?: boolean;
  /** YYYY-MM-DD; drives "Recently added" */
  addedOn: string;
  /** Kept for breadcrumbs and lookups but never listed (e.g. tutor-only pages) */
  hidden?: boolean;
};

/** Everything one content file contributes. */
export type ContentPack = {
  curricula: Curriculum[];
  levels: Level[];
  courses: Course[];
  resources: Resource[];
};

export type Crumb = { label: string; href?: string };

export type SearchEntry = {
  type: "course" | "topic" | "resource";
  title: string;
  /** Second line: course, unit, kind */
  context: string;
  href: string;
  /** Extra words matched but not shown */
  keywords?: string;
};
