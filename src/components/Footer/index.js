export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-4">
            <footer>
                <p>
                    todos os diritos reservados &copy; {new Date().getFullYear()} - Desenvolvido por 
                </p>
            </footer>
        </div>
    )
}