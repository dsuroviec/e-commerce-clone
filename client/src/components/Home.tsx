import { useContext } from "react";
import { Redirect } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import { Button } from "./Button";

export const Home = () => {
    const { token } = useContext(TokenContext)!;
    const { user } = useContext(UserContext)!;

    return (
        <>
            {!token && <Redirect to="/login" />}
            <div
                style={{
                    textAlign: "center",
                    marginTop: "50px",
                }}
            >
                {user?.firstName && (
                    <h1 className="text-3xl">{`Welcome ${user.firstName}`}</h1>
                )}
                <h1 className="text-xl">{`have a chilln' ${new Date().toLocaleDateString(
                    undefined,
                    { weekday: "long" }
                )}`}</h1>
                <Button
                    onClick={async () =>
                        await fetch("/api/products").then((response) =>
                            response.json()
                        )
                    }
                >
                    get all products
                </Button>
            </div>
        </>
    );
};
