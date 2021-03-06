import React, { FC, useState, useEffect, Fragment } from 'react'
import { Toast } from 'antd-mobile'
import { Link, NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { IconButton, Badge } from '@material-ui/core'
import { useTypedSelector } from '../store/reducer'
import IconCaidan from './iconfont/IconCaidan'
import IconSousuo from './iconfont/IconSousuo'
import IconClose from './iconfont/IconClose'
import Logo from './Logo'
import styled from 'styled-components'
import HeaderDrawer from './HeaderDrawer'

interface Props {
    isShowTab?: boolean,
}


const Header: FC<Props> = ({isShowTab}) => {
    const state = useTypedSelector(state => state)

    const dispatch = useDispatch()
    const history = useHistory()
    const {path} = useRouteMatch()

    const [modal, setModal] = useState(false)
    const [showHeader, setShowHeader] = useState(true)


    useEffect(() => {
        if (!isShowTab) return
        window.addEventListener('scroll', _onScroll)
        return () => window.removeEventListener('scroll', _onScroll)
        // eslint-disable-next-line
    }, [])

    const _onScroll = () => {
        if (window.scrollY > 100) setShowHeader(false)
        else setShowHeader(true)
    }

    const _onSwitchModal = (event: any) => {
        event.preventDefault()
        setModal(!modal)
    }

    const LinkTo = (value: string, full: string = '') => () => {
        if (!path.search(value)) {
            setTimeout(() => setModal(!modal), 500)
            return
        }
        setTimeout(() => history.push(value + full), 500)
    }

    const RenderRightView = () => {
        if (state.User.isLogin) {
            return (
                <Fragment>
                    <Link to='/downApp' className='color-0084ff login down-app'>下载 App</Link>
                    {
                        modal ? (
                            <IconButton onClick={_onSwitchModal} style={{marginRight: -12}}>
                                <IconClose
                                    size={23}
                                    color='#8590a6'
                                />
                            </IconButton>
                        ) : (
                            <IconButton onClick={_onSwitchModal} style={{marginRight: -12}}>
                                <Badge
                                    badgeContent={state.Notice.unread + state.Notice.chat}
                                    color='secondary'
                                    max={99}
                                >
                                    <IconCaidan
                                        size={23}
                                        color='#8590a6'
                                    />
                                </Badge>
                            </IconButton>
                        )
                    }

                </Fragment>
            )
        } else if (!isShowTab) {
            return (
                <Fragment>
                    <Link to='/downApp' className='color-0084ff login down-app'>下载 App</Link>
                    <Link to='/signIn' className='color-0084ff login' style={{marginLeft: 16}}>注册登录</Link>
                </Fragment>
            )
        } else {
            return (
                <Link to='/signIn' className='color-0084ff login'>注册或登录</Link>
            )
        }
    }

    const _onDropOut = () => {
        setTimeout(() => {
            localStorage.removeItem('token')
            dispatch({
                type: 'user/dropOut'
            })
            Toast.success('已退出登录!', 1.5)
        }, 500)
    }

    const toggleDrawer = (state: boolean) => () => {
        setModal(state)
    }

    return (
        <Fragment>
            <Wrapper>
                <Top className={showHeader ? 'show' : ''}>
                    <Logo />
                    <InputWrapper>
                        <input type="text" placeholder='美国确诊数全球第一' onClick={() => history.push('/search')} />
                        <IconSousuo size={20} color='#999' />
                    </InputWrapper>
                    <RenderRightView />
                </Top>


                {
                    isShowTab && !state.User.isLogin && (
                        <Fragment>
                            <div style={{backgroundImage: 'linear-gradient(0deg,#fcfcfc,#ebebeb)', height: 5}} />
                            <NavWrapper>
                                <NavLink to='/' exact>推荐</NavLink>
                                <NavLink to='/home/shenghuo' exact>生活</NavLink>
                                <NavLink to='/home/jiaoyu' exact>教育</NavLink>
                                <NavLink to='/home/yule' exact>娱乐</NavLink>
                                <NavLink to='/home/qiche' exact>汽车</NavLink>
                                <NavLink to='/home/jinrong' exact>金融</NavLink>
                                <NavLink to='/home/zhichang' exact>职场</NavLink>
                                <NavLink to='/home/keji' exact>科技</NavLink>
                                <NavLink to='/home/tiyu' exact>体育</NavLink>
                            </NavWrapper>
                        </Fragment>
                    )
                }
            </Wrapper>
            {
                state.User.isLogin && (
                    <HeaderDrawer
                        state={modal}
                        toggleDrawer={toggleDrawer}
                        LinkTo={LinkTo}
                        onDropOut={_onDropOut}
                        user_id={state.User._id!}
                        unread={state.Notice.unread}
                        chat={state.Notice.chat}
                    />
                )
            }
        </Fragment>
    )
}

export const Wrapper = styled('header')`
width: 100%;
background-color: #fff;
box-shadow: 0 1px 3px 0 rgba(23,81,153,.05);
border-bottom: 1px solid rgba(26,26,26,.06);
position: fixed;
top: 0;
left: 0;
z-index: 6666;
.login {
  margin-left: 12px;
}
.down-app {
  position: relative;
  padding-right: 16px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    display: block;
    width: 0;
    height: 16px;
    border-left: 1.5px solid #ebebeb;
    }
}
`
export const Top = styled('div')`
height: 0;
display:flex;
align-items: center;
position: relative;
padding-left: 94px;
padding-right: 15px;
transition: all .3s;
opacity: 0;
&.show {
  opacity: 1;
  height: 53px;
}
.logo {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
`
export const InputWrapper = styled('label')`
position: relative;
flex: 1;
input {
  width: 100%;
  outline: none;
  background-color: hsla(0,0%,92.2%,.72);
  border: 1px solid #ebebeb;
  height: 32px;
  border-radius: 16px;
  padding-left: 30px;
  padding-right: 10px;
  color: #1a1a1a;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: normal;
  display:flex;
  align-items: center;
}
svg {
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
}
`

const NavWrapper = styled('nav')`
height: 50px;
overflow-x: scroll;
white-space: nowrap;
padding: 0 10px;
background-color: #fcfcfc;
box-shadow: 0 1px 5px 0 rgba(0,0,0,.1);
&::-webkit-scrollbar {
  display: none;
}
a {
  border:.5px solid #ebebeb;
  border-radius: 12px;
  color: #999999;
  font-size: 14px;
  margin: 10px 5px 15px;
  background-color: #fff;
  width: 60px;
  height: 25px;
  display:inline-flex;
  align-items: center;
  justify-content: center;
  &.active {
    font-weight: bold;
    color: #444444;
  }
}
`

export default Header
