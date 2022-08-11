import { SignupInfoContainer, TitleDiv, UserInfoDiv, ProgressBtn, UserProfile, UserInfo, UserSex } from './Signupinfo.style'
import { useRef, useState } from 'react'
import Image from 'next/image'
import CurrentStatus from './CurrentStatus'

const Signupinfo = () => {
    const [image, setImage] = useState('/blank.png')
    const fileInput = useRef(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        } else {
            setImage(image)
            return
        }
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <SignupInfoContainer>
            <CurrentStatus />
            <TitleDiv>회원 정보 입력</TitleDiv>
            <UserProfile>
                <a
                    href='#'
                    onClick={() => {
                        fileInput.current.click()
                    }}
                >
                    <Image src={image} width={150} height={150} alt='이미지입니다.' />
                </a>
                <UserInfoDiv>
                    <input type='text' placeholder='닉네임을 입력하세요' />
                    <label htmlFor='input-file'>이미지 선택</label>
                    <input
                        type='file'
                        name='profile_img'
                        id='input-file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        ref={fileInput}
                        onChange={handleChange}
                    />
                </UserInfoDiv>
            </UserProfile>
            <UserInfo>
                <div>이름</div>
                <input type='text' name='name' placeholder='이름을 입력하세요' />
                <div>성별</div>
                <UserSex>
                    <button>남자</button>
                    <button>여자</button>
                </UserSex>
                <div>생년월일</div>
                <input type='date' name='birth' placeholder='생년월일을 입력하세요' />
            </UserInfo>
            <div>
                <ProgressBtn>완료</ProgressBtn>
            </div>
        </SignupInfoContainer>
    )
}

export default Signupinfo
