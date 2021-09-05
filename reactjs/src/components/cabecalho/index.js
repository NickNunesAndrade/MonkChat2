import { Barra, ContainerCabecalho, botao1 } from './styled'
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';


export default function Cabecalho() {
    const navigation = useHistory();
    const logoff = () => {
       Cookies.remove('usuario-logado');
       navigation.push('/');
    }

    return (
        <ContainerCabecalho>
            <img src="/assets/images/logo-monkchat.png" alt="" />
            <Barra />
            <div className="titulo"> MonkChat </div>
            <botao1 onClick={logoff}>&nbsp;&nbsp;&nbsp;Sair</botao1>
        </ContainerCabecalho>
    )
}
