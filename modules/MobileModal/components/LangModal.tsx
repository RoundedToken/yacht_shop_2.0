import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TLang } from '../../../models/types/TLang';
import { ILangModal } from '../interfaces/ILangModal';
import ModalHeader from './ModalHeader';
import { useChangeLocale, useCurrentLocale, useI18n } from '../../../locales/client';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice/stylesSlice';

const LangModal: FC<ILangModal> = ({ styles }) => {
    const dispatch = useDispatch();
    const changeLocale = useChangeLocale();
    const t = useI18n();
    const l = useCurrentLocale() as TLang;

    const changeLang = (lang: TLang) => {
        changeLocale(lang);
        dispatch(switchMobileModalDisplay());
        document.body.style.overflow = 'auto';
    };

    return (
        <div className={styles.content}>
            <ModalHeader styles={styles} title={t('language_selection')} />

            <div className={styles.itemsContainer}>
                <div onClick={() => changeLang('est')} className={`${styles.item} ${l === 'est' && styles.activeLang}`}>
                    Eesti
                </div>

                <div onClick={() => changeLang('eng')} className={`${styles.item} ${l === 'eng' && styles.activeLang}`}>
                    English
                </div>

                <div onClick={() => changeLang('rus')} className={`${styles.item} ${l === 'rus' && styles.activeLang}`}>
                    Русский
                </div>
            </div>
        </div>
    );
};

export default LangModal;
