import { EmitBlockKind } from "./emit-block";

export interface GenerateCodeOptions {
  emitDMMF?: boolean;
  emitTranspiledCode?: boolean;
  simpleResolvers?: boolean;
  useOriginalMapping?: boolean;
  useUncheckedScalarInputs?: boolean;
  emitIdAsIDType?: boolean;
  emitOnly?: EmitBlockKind[];

  /* internal options */
  outputDirPath: string;
  relativePrismaOutputPath: string;
  absolutePrismaOutputPath?: string;
}
