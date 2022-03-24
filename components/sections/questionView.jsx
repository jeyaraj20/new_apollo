import React from 'react';
import { decode } from 'html-entities';

import { questionImageDir } from '../../config';

const QuestionView = ({ question }) => {

    let questionImageDirfinal = questionImageDir;
    let mainquestion;
    let opt1;
    let opt2;
    let opt3;
    let opt4;
    let opt5;
    if (question.q_type === 'I') {
        mainquestion = <img alt={question.question}
            src={questionImageDirfinal + '/' + question.question}
        />
    } else {
        let questionvalue = decode(question.question);
        mainquestion = <div dangerouslySetInnerHTML={{ __html: questionvalue }}></div>
    }
    if (question.opt_1) {
        if (question.opt_type1 === 'I') {
            opt1 = <img alt={question.opt_1}
                src={questionImageDirfinal + '/' + question.opt_1}
                style={{ width: '100px', height: '100px' }}
            />
        } else {
            opt1 = <div dangerouslySetInnerHTML={{ __html: decode(question.opt_1) }}></div>
        }
    }
    if (question.opt_2) {
        if (question.opt_type2 === 'I') {
            opt2 = <img alt={question.opt_2}
                src={questionImageDirfinal + '/' + question.opt_2}
                style={{ width: '100px', height: '100px' }}
            />
        } else {
            opt2 = <div dangerouslySetInnerHTML={{ __html: decode(question.opt_2) }}></div>
        }
    }
    if (question.opt_3) {
        if (question.opt_type3 === 'I') {
            opt3 = <img alt={question.opt_3}
                src={questionImageDirfinal + '/' + question.opt_3}
                style={{ width: '100px', height: '100px' }}
            />
        } else {
            opt3 = <div dangerouslySetInnerHTML={{ __html: decode(question.opt_3) }}></div>
        }
    }
    if (question.opt_4) {
        if (question.opt_type4 === 'I') {
            opt4 = <img alt={question.opt_4}
                src={questionImageDirfinal + '/' + question.opt_4}
                style={{ width: '100px', height: '100px' }}
            />
        } else {
            opt4 = <div dangerouslySetInnerHTML={{ __html: decode(question.opt_4) }}></div>
        }
    }
    if (question.opt_5) {
        if (question.opt_type5 === 'I') {
            opt5 = <img alt={question.opt_5}
                src={questionImageDirfinal + '/' + question.opt_5}
                style={{ width: '100px', height: '100px' }}
            />
        } else {
            opt5 = <div dangerouslySetInnerHTML={{ __html: decode(question.opt_5) }}></div>
        }
    }

    return (
        <div>
            <div>
                <div className="row no-gutters">
                    <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                        <h4>Question Id :</h4>
                    </div>
                    <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                        {question.question_code}
                    </div>
                </div>
                <div className="row no-gutters">
                    <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                        <h4>Question Type :</h4>
                    </div>
                    <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                        {question.q_type === 'T' ? 'Text' : question.q_type === 'P' ? 'Passage' : 'Image'}
                    </div>
                </div>
                <div className="row no-gutters">
                    <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                        <h4>Question :</h4>
                    </div>
                    <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                        {mainquestion}
                    </div>
                </div>
                <div className="row no-gutters">
                    <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                        <h4>Question Description :</h4>
                    </div>
                    <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                        {question.quest_desc}
                    </div>
                </div>
                {opt1 &&
                    <>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option Type 1 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {question.opt_type1 === 'T' ? 'Text' : 'Image'}
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option 1 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {opt1}
                            </div>
                        </div>
                    </>
                }
                {opt2 &&
                    <>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option Type 2 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {question.opt_type2 === 'T' ? 'Text' : 'Image'}
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option 2 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {opt2}
                            </div>
                        </div>
                    </>
                }
                {opt3 &&
                    <>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option Type 3 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {question.opt_type3 === 'T' ? 'Text' : 'Image'}
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option 3 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {opt3}
                            </div>
                        </div>
                    </>
                }
                {opt4 &&
                    <>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option Type 4 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {question.opt_type4 === 'T' ? 'Text' : 'Image'}
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option 4 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {opt4}
                            </div>
                        </div>
                    </>
                }
                {opt5 &&
                    <>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option Type 5 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {question.opt_type5 === 'T' ? 'Text' : 'Image'}
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                <h4>Option 5 :</h4>
                            </div>
                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                {opt5}
                            </div>
                        </div>
                    </>
                }
                {question.q_type === "P" &&
                    question.passageQuestions.map(p => {
                        let p_question
                        let p_opt_1
                        let p_opt_2
                        let p_opt_3
                        let p_opt_4
                        let p_opt_5
                        if (p.passage_q_type === 'I') {
                            p_question = <img alt={p.passage_question}
                                src={questionImageDirfinal + '/' + p.passage_question}
                            />
                        } else {
                            let questionvalue = decode(p.passage_question);
                            p_question = <div dangerouslySetInnerHTML={{ __html: questionvalue }}></div>
                        }
                        if (p.passage_opt_1) {
                            if (p.passage_opt_type1 === 'I') {
                                p_opt_1 = <img alt={p.passage_opt_1}
                                    src={questionImageDirfinal + '/' + p.passage_opt_1}
                                    style={{ width: '100px', height: '100px' }}
                                />
                            } else {
                                p_opt_1 = <div dangerouslySetInnerHTML={{ __html: decode(p.passage_opt_1) }}></div>
                            }
                        }
                        if (p.passage_opt_2) {
                            if (p.passage_opt_type2 === 'I') {
                                p_opt_2 = <img alt={p.passage_opt_2}
                                    src={questionImageDirfinal + '/' + p.passage_opt_2}
                                    style={{ width: '100px', height: '100px' }}
                                />
                            } else {
                                p_opt_2 = <div dangerouslySetInnerHTML={{ __html: decode(p.passage_opt_2) }}></div>
                            }
                        }
                        if (p.passage_opt_3) {
                            if (p.passage_opt_type3 === 'I') {
                                p_opt_3 = <img alt={p.passage_opt_3}
                                    src={questionImageDirfinal + '/' + p.passage_opt_3}
                                    style={{ width: '100px', height: '100px' }}
                                />
                            } else {
                                p_opt_3 = <div dangerouslySetInnerHTML={{ __html: decode(p.passage_opt_3) }}></div>
                            }
                        }
                        if (p.passage_opt_4) {
                            if (p.passage_opt_type4 === 'I') {
                                p_opt_4 = <img alt={p.passage_opt_4}
                                    src={questionImageDirfinal + '/' + p.passage_opt_4}
                                    style={{ width: '100px', height: '100px' }}
                                />
                            } else {
                                p_opt_4 = <div dangerouslySetInnerHTML={{ __html: decode(p.passage_opt_4) }}></div>
                            }
                        }
                        if (p.passage_opt_5) {
                            if (p.passage_opt_type5 === 'I') {
                                p_opt_5 = <img alt={p.passage_opt_5}
                                    src={questionImageDirfinal + '/' + p.passage_opt_5}
                                    style={{ width: '100px', height: '100px' }}
                                />
                            } else {
                                p_opt_5 = <div dangerouslySetInnerHTML={{ __html: decode(p.passage_opt_5) }}></div>
                            }
                        }
                        return (
                            <div>
                                <div className="row no-gutters">
                                    <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                        <h4> Passage Question :</h4>
                                    </div>
                                    <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                        {p_question}
                                    </div>
                                </div>
                                {p.passage_opt_1 &&
                                    <>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option Type 1 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p.passage_opt_type1 === 'T' ? 'Text' : 'Image'}
                                            </div>
                                        </div>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option 1 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p_opt_1}
                                            </div>
                                        </div>
                                    </>
                                }
                                {p.passage_opt_2 &&
                                    <>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option Type 2 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p.passage_opt_type2 === 'T' ? 'Text' : 'Image'}
                                            </div>
                                        </div>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option 2 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p_opt_2}
                                            </div>
                                        </div>
                                    </>
                                }
                                {p.passage_opt_3 &&
                                    <>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option Type 3 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p.passage_opt_type3 === 'T' ? 'Text' : 'Image'}
                                            </div>
                                        </div>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option 3 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p_opt_3}
                                            </div>
                                        </div>
                                    </>
                                }
                                {p.passage_opt_4 &&
                                    <>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option Type 4 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p.passage_opt_type4 === 'T' ? 'Text' : 'Image'}
                                            </div>
                                        </div>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option 4 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p_opt_4}
                                            </div>
                                        </div>
                                    </>
                                }
                                {p.passage_opt_5 &&
                                    <>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option Type 5 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p.passage_opt_type5 === 'T' ? 'Text' : 'Image'}
                                            </div>
                                        </div>
                                        <div className="row no-gutters">
                                            <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                                <h4>Option 5 :</h4>
                                            </div>
                                            <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                                {p_opt_5}
                                            </div>
                                        </div>
                                    </>
                                }
                                <div className="row no-gutters">
                                    <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                                        <h4>Correct Answer :</h4>
                                    </div>
                                    <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                                        {p.passage_crt_ans}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="row no-gutters">
                    <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                        <h4>Difficulty Level :</h4>
                    </div>
                    <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                        {question.quest_level}
                    </div>
                </div>
                {question.q_type !== "P" &&
                    <div className="row no-gutters">
                        <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                            <h4>Correct Answer :</h4>
                        </div>
                        <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                            {question.crt_ans}
                        </div>
                    </div>
                }
                <div className="row no-gutters">
                    <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                        <h4>Status :</h4>
                    </div>
                    <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                        {question.quest_status === 'Y' ? 'Active' : question.quest_status === 'W' ? 'Waiting' : 'Inactive'}
                    </div>
                </div>
                <div className="row no-gutters">
                    <div style={{ padding: '1%', textAlign: 'right' }} className="col-lg-3 d-flex flex-column order-lg-1">
                        <h4>Date :</h4>
                    </div>
                    <div style={{ padding: '1%', textAlign: 'left' }} className="col-lg-4 d-flex flex-column order-lg-1">
                        {question.quest_date}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionView;