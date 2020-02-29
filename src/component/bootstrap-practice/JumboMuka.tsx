import React from 'react'

export const JumboMuka: React.FC = () => {
    return (
        <React.Fragment>
            <div className="jumbotron">
                <h1 className="display-4">你好梦珂!</h1>
                <p className="lead">我做的Web Site怎么样</p>
                <hr className="my-4"/>
                <p>我想做一个网站。它有吉他的音阶，让奏吉他的人可以更简单学习。你觉得怎么样。</p>
                <a className="btn btn-primary btn-lg" href="#jumbotron" role="button">Learn more</a>
            </div>
        </React.Fragment>
    )
}