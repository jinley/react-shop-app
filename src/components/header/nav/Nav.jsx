// nav 부분 교재 보고 따라 만들어 보기
// 그래도 안 되면 그냥 내가 알아서 만들거나...
// 만들면서 auth, redux 등 아래 부분 그냥 내가 참고해 가면서 할 것이다. 
/*
 리덕스와 같은 상태관리라이브러리로 상태 관리 => 왜 쓰는지?
- 파이어베이스 인증 서비스로 로그인 기능 구현
- 타입스크립트로 트랜스파일 구현
- 상품데이터는 fakestoreapi를 이용해 구현
*/

// 꼭 이거랑 똑같이 만들지 않아도 되는 거잖아? 
// 이미 유튜브에서 배웠으니까 뭐...

import React from 'react'
import { FiUser, FiLogIn, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { GoSignOut } from 'react-icons/go';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <div className={styles.counter}>
                    <Link to={'/cart'}> {/* 장바구니 링크 */}
                        {' '}
                        <FiShoppingCart />
                    </Link>
                </div>
             </li>
            <li>
                <div className={styles.counter}>
                    <Link to={'/order'}> {/* 주문 링크 */}
                        {' '}
                        <FiUser title='주문'/>
                    </Link>
                </div>
            </li>
            <li>
                <GoSignOut
                    className={styles.nav_sign_out}
                    title='로그아웃'
                />
                <Link to={'/login'}>
                    <FiLogIn title='로그인'/>  {/* 로그인 링크 */}
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
