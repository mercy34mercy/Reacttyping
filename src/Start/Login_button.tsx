type Loginbuttonprops = {
    loginflag:boolean
    handlelogin:React.MouseEventHandler<HTMLButtonElement>,
    handlelogout:React.MouseEventHandler<HTMLButtonElement>,
    username:string|null|undefined
}

export const LoginButton = (props:Loginbuttonprops) => {
    if (props.loginflag) {
        return (
            <div className='displayname'>
                <button className='logout'  onClick={props.handlelogout}>ログアウト</button>
                <p className='name'>ようこそ{props.username}さん</p>
            </div>
        )
    } else {
        return (
            <div className='login'>
                <button className='loginbutton' onClick={props.handlelogin}>ログイン</button>
            </div>
        )
    }
}