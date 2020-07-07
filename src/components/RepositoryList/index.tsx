import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../../store";
import { Repository } from "../../store/ducks/repositories/types";
import * as RespositoryActions from "../../store/ducks/repositories/actions";
import RepositoryItem from "../RepositoryItem";

/* Mapear o tipo das infos que vem de mapStateToProps */
interface StateProps {
  repositories: Repository[];
}

/* Mapear o tipo das infos que vem de mapDispatchToProps */
interface DispatchProps {
  loadRequest(): void;
}

/* Qualquer outra propriedade que vem de um component pai */
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

const RepositoryList: React.FC<Props> = ({ repositories, loadRequest }) => {
  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  return (
    <ul>
      {repositories.map((r) => (
        <RepositoryItem key={r.id} repository={r} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RespositoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
