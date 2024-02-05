// Refered to this article: https://qiita.com/Takepepe/items/f66c7e2e1d22b431f148

import { FC } from "react";

declare module "react" {
  type FCX<P = {}> = FC<P & { className?: string; children?: ReactNode }>;
}
