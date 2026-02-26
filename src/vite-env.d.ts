/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly FOOBAR: string;
  readonly NEXT_PUBLIC_FOOBAR: string;
  readonly [key: string]: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
