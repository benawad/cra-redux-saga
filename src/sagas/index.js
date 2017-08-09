import { all, fork } from "redux-saga/effects";

// inefficient way
// import { userSaga1, userSaga2 } from "./users";
// import { accountSaga1, accountSaga2 } from "./accounts";

// export default function* rootSaga() {
//   yield all([
//     fork(userSaga1),
//     fork(userSaga2),
//     fork(accountSaga1),
//     fork(accountSaga2)
//   ]);
// }

// { userSaga1: () => {} }
import * as userSagas from "./users";
import * as accountSagas from "./accounts";

export default function* rootSaga() {
  yield all(
    [...Object.values(userSagas), ...Object.values(accountSagas)].map(fork)
  );
}
