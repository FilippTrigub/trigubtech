/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly FOOBAR: string | undefined;
  readonly NEXT_PUBLIC_FOOBAR: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
