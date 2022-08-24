import { useContext } from "react";
import { UserContext } from "../utils/contexts";

function HomePage() {
    const { user } = useContext(UserContext)
    console.log(user);
    return (
        <div>
            HomePage
        </div>
    );
}

export default HomePage;