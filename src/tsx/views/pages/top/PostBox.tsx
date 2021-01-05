import React, { useState, FC } from 'react'
import { useDispatch } from 'react-redux'
import { css } from '@emotion/core'

// components
import { ColorBtn } from '../../components/atoms/ColorBtn'
//store
import { addTag } from '../../../stores/slices/tagListSlice'
// style
import { colors } from '../../../style/components/atoms/Button'

/**
 * 付箋をstoreにpostするcomponent
 */
export const PostBox: FC = () => {
  const [color, setColor] = useState('white')
  const [postTxt, setPostTxt] = useState('')
  const dispatch = useDispatch()

  /////////////////////
  // state変更用メソッド
  const setClrHandler = (color: string) => {
    setColor(color)
  }
  const setTxtHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostTxt(e.target.value)
  }
  /////////////////////
  // post用メソッド
  const postHandler = () => {
    dispatch(addTag({
      color: color,
      text: postTxt
    }))
    // データをクリア
    setPostTxt('')
  }

  return (
    <section css={PostBoxCss}>
      <textarea
        css={TextBoxMain(color)}
        onChange={setTxtHandler}
        value={postTxt}
      />
      <div css={BottomBlockCss}>
        <div>
          <ColorBtn
            clrType="white"
            setClrHandler={setClrHandler}
          />
          <ColorBtn
            clrType="blue"
            setClrHandler={setClrHandler}
          />
          <ColorBtn
            clrType="green"
            setClrHandler={setClrHandler}
          />
          <ColorBtn
            clrType="red"
            setClrHandler={setClrHandler}
          />
          <ColorBtn
            clrType="yellow"
            setClrHandler={setClrHandler}
          />
          <button
            css={PostBtnCss}
            onClick={postHandler}
          >Postする</button>
        </div>
      </div>
    </section>
  )
}

const PostBoxCss = css`
  margin: 30px 20px 0;
`
const TextBoxMain = (color: string) => css`
    width: 100%;
    min-width: 200px;
    height: 200px;
    padding: 20px;
    font-size: 14px;
    background: ${colors[color].background};
`

const BottomBlockCss = css`
`

const PostBtnCss = css`
  margin-left: 30px;
  background: #fff;
  cursor: pointer;
`
