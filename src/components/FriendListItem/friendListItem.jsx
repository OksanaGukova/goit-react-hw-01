import css from './friendListitem.module.css'
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
     const classNames = clsx(css.ontine, isOnline ? css.isOnline : css.offline);
    return (
       <li className={css.container}>
            <img className={css.avatar}src={avatar} alt="Avatar" width="40" />
  <p className={css.name}>{name}</p>
  <p className={css.stats}>{(isOnline ? <span className={classNames}>online</span> : <span className={classNames}>offline</span>)}</p>
</li>
    )

}

export default FriendListItem;