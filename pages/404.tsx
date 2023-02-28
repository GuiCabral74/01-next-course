import Link from "../src/components/Link";

export default function Page404() {
    return(
        <div>
            <h1>Oh não... você se perdeu no site, esta página não existe. Por favor, volte para a Home</h1>
            <Link href="/">
                Home
            </Link>
        </div>
    )
}