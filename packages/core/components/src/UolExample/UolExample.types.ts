// The main prop types
export interface UolExampleProps {
  label?: string;
}

// Main props plus the <slot /> for the story
export interface UolExampleWithSlot extends UolExampleProps {
  default?: string;
}
