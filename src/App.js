import { gql, useQuery } from "@apollo/client";
import "./styles.css";

export default function App() {
    const getSku = gql`
        query getSku($take: Int!, $skip: Int!) {
            data
        }
    `;

    const { loading, error } = useQuery(getSku, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (err) => {
            console.error(err);
        },
        variables: {
            take: 10,
            skip: 0,
        },
    });

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}
