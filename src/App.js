import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import routes from "./routes";
import store from "./store";
import Aos from "aos";
import "aos/dist/aos.css";
import AuthState from "./context";

function App() {
    if (typeof window !== "undefined") {
        // aos initialization
        Aos.init({
            duration: 1500,
            delay: 200,
        });
    }
    return (
        <>
        <AuthState>
            {/* <Provider store={store}> */}
                <BrowserRouter>
                    <Switch>
                        {routes.map((route) => {
                            // eslint-disable-next-line default-case
                            switch (route.layout) {
                                case "main":
                                    return (
                                        <Route exact path={route.path}>
                                            <Main>
                                                <route.component />
                                            </Main>
                                        </Route>
                                    );
                                case "auth":
                                    return (
                                        <Route exact path={route.path}>
                                            <Auth>
                                                <route.component />
                                            </Auth>
                                        </Route>
                                    );
                            }
                        })}
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            {/* </Provider> */}
            </AuthState>
        </>
            
    );
}

export default App;
