import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <div>
        <nav>
            <div className='nav__brand'>
                <h1>कृषिAAN</h1>
            </div>

            <input
                type="text"
                className="nav__search"
            />

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}

        </nav>
        <ul className='nav__links'>
        <li><a href="#Clothing & Jewelry">Kharif Crops</a></li>
        <li><a href="#Electronics & Gadgets">Rabi Crops</a></li>
        <li><a href="#Toys & Gaming">Fruits & Vegetables</a></li>
    </ul>
    </div>
    );
}

export default Navigation;