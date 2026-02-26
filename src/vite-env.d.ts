/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FOOBAR?: string;
  readonly VITE_NEXT_PUBLIC_FOOBAR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
