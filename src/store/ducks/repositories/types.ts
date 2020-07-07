/**
 * Action Types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCESS = "@repositories/LOAD_SUCCESS",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

/**
 * Data Types (Formato da informação dentro do reducer)
 */
export interface Repository {
  id: number;
  name: string;
}

/**
 * State Type (Formato do estado que vai armazenar pelo reducer)
 */
export interface RepositoriesState {
  /**
   * readonly pois o states sao imutaveis, garante que nao vai ser alterado
   * um novo estado sempre sera criado
   */
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
