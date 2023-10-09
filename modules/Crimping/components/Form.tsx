import React, { FC } from 'react';
import RopeDiameter from './RopeDiameter';
import RopeLength from './RopeLength';
import RopeEnds from './RopeEnds';
import { IForm } from '../interfaces/IForm';
import FormWrapper from './FormWrapper';

const Form: FC<IForm> = ({ styles, t }) => {
    return (
        <FormWrapper>
            <div className={styles.formTitle}>{t('crimping_text_3')}</div>

            <div className={styles.diameterAndLengthContainer}>
                <div className={styles.diameterAndLengthContainerTitle}>
                    <div>&#9658;</div>

                    {t('crimping_text_4')}
                </div>

                <RopeDiameter styles={styles} t={t} />

                <RopeLength />
            </div>

            <div className={styles.breakLine} />

            <RopeEnds styles={styles} t={t} />
        </FormWrapper>
    );
};

export default Form;
