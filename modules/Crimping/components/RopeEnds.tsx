import React, { FC } from 'react';
import RadioButton from '../../../UI/RadioButton/RadioButton';
import eyeImg from '../../../public/assets/images/eye.jpg';
import forkImg from '../../../public/assets/images/fork.jpg';
import toggleImg from '../../../public/assets/images/toggle.jpg';
import tImg from '../../../public/assets/images/t.jpg';
import threadImg from '../../../public/assets/images/thread.jpg';
import turnbuckleImg from '../../../public/assets/images/turnbuckle.jpg';
import { IRopeEnds } from '../interfaces/IRopeEnds';
import turnbuckleToggleImg from '../../../public/assets/images/turnbuckleToggle.jpg';
import Image from 'next/image';

const RopeEnds: FC<IRopeEnds> = ({ styles, t }) => {
    return (
        <div className={styles.ropeEndsContainer}>
            <div className={styles.ropeEndsContainerTitle}>
                <div>&#9658;</div>

                {t('crimping_text_5')}
            </div>

            <div className={styles.titleGroup}>
                <div>{t('tips')}</div>

                <div className={styles.titleGroupItem}>
                    <Image width={70} height={90} src={eyeImg} alt="" />
                    {t('eye')}
                </div>
                <div className={styles.titleGroupItem}>
                    <Image width={70} height={90} src={forkImg} alt="" />

                    {t('fork')}
                </div>
                <div className={styles.titleGroupItem}>
                    <Image width={70} height={90} src={toggleImg} alt="" />

                    {t('toggle')}
                </div>
                <div className={styles.titleGroupItem}>
                    <Image width={70} height={90} src={tImg} alt="" />

                    {t('t_terminal')}
                </div>
                <div className={styles.titleGroupItem}>
                    <Image width={70} height={90} src={threadImg} alt="" />

                    {t('thread_right')}
                </div>
                <div className={styles.titleGroupItem}>
                    <Image width={70} height={90} src={threadImg} alt="" />

                    {t('thread_left')}
                </div>
                <div className={styles.titleGroupItem}>
                    <Image width={70} height={90} src={turnbuckleImg} alt="" />

                    {t('turnbuckle')}
                </div>
                <div className={styles.titleGroupItem}>
                    <Image width={70} height={90} src={turnbuckleToggleImg} alt="" />

                    {t('turnbuckle_toggle')}
                </div>
            </div>

            <div className={styles.end1Group}>
                <div>{t('end_1')}</div>

                <div className={styles.radioContainer}>
                    <RadioButton value="eye" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="fork" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="toggle" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="t" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="thread_right" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="thread_left" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="turnbuckle" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="turnbuckle_toggle" name="end1" />
                </div>
            </div>

            <div className={styles.end2Group}>
                <div>{t('end_2')}</div>

                <div className={styles.radioContainer}>
                    <RadioButton value="eye" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="fork" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="toggle" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="t" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="thread_right" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="thread_left" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="turnbuckle" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="turnbuckle_toggle" name="end2" />
                </div>
            </div>
        </div>
    );
};

export default RopeEnds;
