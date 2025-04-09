export interface SemgrepJsonRootObject {
  results?: Result[];
  errors?: Error[];
  paths?: Paths;
  version?: string;
  time?: Time;
  explanations?: Explanation[];
  rules_by_engine?: any[][];
  engine_requested?: any;
  interfile_languages_used?: string[];
  skipped_rules?: Skipped_Rules[];
}

export interface Version {
  version?: string;
}

export interface Paths {
  scanned?: string[];
  skipped?: Skipped[];
}

export interface Skipped {
  path?: string;
  reason?: any;
  details?: string;
  rule_id?: string;
}

export interface Time {
  rules?: string[];
  rules_parse_time: number;
  profiling_times?: Profiling_Times;
  targets?: Target[];
  total_bytes: number;
  max_memory_bytes: number;
}

export interface Profiling_Times {}

export interface Target {
  path?: string;
  num_bytes: number;
  match_times?: (number | null)[];
  parse_times?: (number | null)[];
  run_time: number;
}

export interface Result {
  check_id?: string;
  path?: string;
  start?: Start;
  end?: End;
  extra?: Extra;
}

export interface Start {
  line: number;
  col: number;
  offset: number;
}

export interface End {
  line: number;
  col: number;
  offset: number;
}

export interface Extra {
  message?: string;
  metadata?: any;
  severity?: any;
  fingerprint?: string;
  lines?: string;
  metavars?: Metavars;
  fix?: string;
  fixed_lines?: string[];
  is_ignored: boolean;
  sca_info?: Sca_Info;
  validation_state?: any;
  historical_info?: Historical_Info;
  dataflow_trace?: Dataflow_Trace;
  engine_kind?: any;
  extra_extra?: any;
}

export interface Metavars {}

export interface Sca_Info {
  reachability_rule: boolean;
  sca_finding_schema: number;
  dependency_match?: Dependency_Match;
  reachable: boolean;
  kind?: any;
}

export interface Dependency_Match {
  dependency_pattern?: Dependency_Pattern;
  found_dependency?: Found_Dependency;
  lockfile?: string;
}

export interface Dependency_Pattern {
  ecosystem?: any;
  package?: string;
  semver_range?: string;
}

export interface Found_Dependency {
  package?: string;
  version?: string;
  ecosystem?: any;
  allowed_hashes?: Allowed_Hashes;
  transitivity?: any;
  resolved_url?: string;
  manifest_path?: string;
  lockfile_path?: string;
  line_number: number;
  children?: any[];
  git_ref?: string;
}

export interface Allowed_Hashes {}

export interface Historical_Info {
  git_commit?: string;
  git_commit_timestamp?: string;
  git_blob?: string;
}

export interface Dataflow_Trace {
  taint_source?: any;
  intermediate_vars?: Intermediate_Vars[];
  taint_sink?: any;
}

export interface Intermediate_Vars {
  location?: Location;
  content?: string;
}

export interface Location {
  path?: string;
  start?: Start1;
  end?: End1;
}

export interface Start1 {
  line: number;
  col: number;
  offset: number;
}

export interface End1 {
  line: number;
  col: number;
  offset: number;
}

export interface Error {
  code: number;
  level?: any;
  type?: any;
  rule_id?: string;
  message?: string;
  path?: string;
  long_msg?: string;
  short_msg?: string;
  spans?: Span[];
  help?: string;
}

export interface Span {
  file?: string;
  start?: Start2;
  end?: End2;
  source_hash?: string;
  config_start?: Config_Start;
  config_end?: Config_End;
  config_path?: string[];
  context_start?: Context_Start;
  context_end?: Context_End;
}

export interface Start2 {
  line: number;
  col: number;
  offset: number;
}

export interface End2 {
  line: number;
  col: number;
  offset: number;
}

export interface Config_Start {
  line: number;
  col: number;
  offset: number;
}

export interface Config_End {
  line: number;
  col: number;
  offset: number;
}

export interface Context_Start {
  line: number;
  col: number;
  offset: number;
}

export interface Context_End {
  line: number;
  col: number;
  offset: number;
}

export interface Explanation {
  op?: any;
  children?: Child[];
  matches?: Match1[];
  loc?: Loc;
  extra?: Extra1;
}

export interface Loc {
  path?: string;
  start?: Start3;
  end?: End3;
}

export interface Start3 {
  line: number;
  col: number;
  offset: number;
}

export interface End3 {
  line: number;
  col: number;
  offset: number;
}

export interface Extra1 {
  before_negation_matches?: any;
  before_filter_matches?: any;
}

export interface Child {
  op?: number | null;
  children?: Child1[];
  matches?: Match[];
  loc?: Loc1;
  extra?: Extra2;
}

export interface Loc1 {
  path?: string;
  start?: Start4;
  end?: End4;
}

export interface Start4 {
  line: number;
  col: number;
  offset: number;
}

export interface End4 {
  line: number;
  col: number;
  offset: number;
}

export interface Extra2 {
  before_negation_matches?: any;
  before_filter_matches?: any;
}

export interface Child1 {
  op?: any;
  children?: any[];
  matches?: any[];
  loc?: Loc2;
  extra?: Extra3;
}

export interface Loc2 {
  path?: string;
  start?: Start5;
  end?: End5;
}

export interface Start5 {
  line: number;
  col: number;
  offset: number;
}

export interface End5 {
  line: number;
  col: number;
  offset: number;
}

export interface Extra3 {
  before_negation_matches?: any;
  before_filter_matches?: any;
}

export interface Match {
  check_id?: string;
  path?: string;
  start?: Start6;
  end?: End6;
  extra?: Extra4;
}

export interface Start6 {
  line: number;
  col: number;
  offset: number;
}

export interface End6 {
  line: number;
  col: number;
  offset: number;
}

export interface Extra4 {
  metavars?: Metavars1;
  engine_kind?: any;
  is_ignored: boolean;
  message?: string;
  metadata?: any;
  severity?: any;
  fix?: string;
  dataflow_trace?: Dataflow_Trace1;
  sca_match?: Sca_Match;
  validation_state?: any;
  historical_info?: Historical_Info1;
  extra_extra: boolean;
}

export interface Metavars1 {}

export interface Dataflow_Trace1 {
  taint_source?: any;
  intermediate_vars?: any[];
  taint_sink?: Taint_Sink;
}

export interface Taint_Sink {}

export interface Sca_Match {
  reachability_rule: boolean;
  sca_finding_schema: number;
  dependency_match?: Dependency_Match1;
  reachable: boolean;
  kind?: any;
}

export interface Dependency_Match1 {
  dependency_pattern?: Dependency_Pattern1;
  found_dependency?: Found_Dependency1;
  lockfile?: string;
}

export interface Dependency_Pattern1 {
  ecosystem?: any;
  package?: string;
  semver_range?: string;
}

export interface Found_Dependency1 {
  package?: string;
  version?: string;
  ecosystem?: any;
  allowed_hashes?: Allowed_Hashes1;
  transitivity?: any;
  resolved_url?: string;
  manifest_path?: string;
  lockfile_path?: string;
  line_number: number;
  children?: any[];
  git_ref?: string;
}

export interface Allowed_Hashes1 {}

export interface Historical_Info1 {
  git_commit?: string;
  git_commit_timestamp?: string;
  git_blob?: string;
}

export interface Match1 {
  check_id?: string;
  path?: string;
  start?: Start7;
  end?: End7;
  extra?: Extra5;
}

export interface Start7 {
  line: number;
  col: number;
  offset: number;
}

export interface End7 {
  line: number;
  col: number;
  offset: number;
}

export interface Extra5 {
  metavars?: Metavars2;
  engine_kind?: any;
  is_ignored: boolean;
  message?: string;
  metadata?: any;
  severity?: any;
  fix?: string;
  dataflow_trace?: Dataflow_Trace2;
  sca_match?: Sca_Match1;
  validation_state?: any;
  historical_info?: Historical_Info2;
  extra_extra?: any;
}

export interface Metavars2 {}

export interface Dataflow_Trace2 {
  taint_source?: any;
  intermediate_vars?: any[];
  taint_sink?: any;
}

export interface Sca_Match1 {
  reachability_rule: boolean;
  sca_finding_schema: number;
  dependency_match?: Dependency_Match2;
  reachable: boolean;
  kind?: any;
}

export interface Dependency_Match2 {
  dependency_pattern?: Dependency_Pattern2;
  found_dependency?: Found_Dependency2;
  lockfile?: string;
}

export interface Dependency_Pattern2 {
  ecosystem?: any;
  package?: string;
  semver_range?: string;
}

export interface Found_Dependency2 {
  package?: string;
  version?: string;
  ecosystem?: any;
  allowed_hashes?: Allowed_Hashes2;
  transitivity?: any;
  resolved_url?: string;
  manifest_path?: string;
  lockfile_path?: string;
  line_number: number;
  children?: any[];
  git_ref?: string;
}

export interface Allowed_Hashes2 {}

export interface Historical_Info2 {
  git_commit?: string;
  git_commit_timestamp?: string;
  git_blob?: string;
}

export interface Skipped_Rules {
  rule_id?: string;
  details?: string;
  position?: Position;
}

export interface Position {
  line: number;
  col: number;
  offset: number;
}
