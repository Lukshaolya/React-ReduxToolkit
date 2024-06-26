import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

// const rootReducer = combineSlices(counterSlice, quotesApiSlice)

// export type RootState = ReturnType<typeof rootReducer>


// export const makeStore = (preloadedState?: Partial<RootState>) => {
//   const store = configureStore({
//     reducer: rootReducer,
//     // Adding the api middleware enables caching, invalidation, polling,
//     // and other useful features of `rtk-query`.
//     middleware: getDefaultMiddleware => {
//       return getDefaultMiddleware().concat(quotesApiSlice.middleware)
//     },
//     preloadedState,
//   })
//   // configure listeners using the provided defaults
//   // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
//   setupListeners(store.dispatch)
//   return store
// }

// export const store = makeStore()

// Infer the type of `store`
// export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
// export type AppDispatch = AppStore["dispatch"]
// export type AppThunk<ThunkReturnType = void> = ThunkAction<
//   ThunkReturnType,
//   RootState,
//   unknown,
//   Action
// >
