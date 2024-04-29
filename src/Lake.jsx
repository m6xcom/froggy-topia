import './styles/Lake.css';
import './utils/particle'

const Lake = () => {
    return (
    <div className="Lake" id="particle-lake">
        <svg className="svg">
            <symbol id="flower" viewBox="0 0 161 161" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
            <path d="M68.163 51.257a69.138 69.138 0 01-.908-11.199c0-14.937 4.767-28.77 12.862-40.058 8.095 11.288 12.862 25.121 12.862 40.058a69.25 69.25 0 01-.908 11.199 69.2 69.2 0 017.277-8.561 68.508 68.508 0 0137.42-19.23 68.503 68.503 0 01-19.231 37.42 69.19 69.19 0 01-8.56 7.277 69.134 69.134 0 0111.198-.908c14.938 0 28.771 4.767 40.059 12.862-11.288 8.095-25.121 12.862-40.059 12.862-3.812 0-7.553-.311-11.198-.908a69.19 69.19 0 018.56 7.277 68.503 68.503 0 0119.231 37.42 68.503 68.503 0 01-37.42-19.231 69.19 69.19 0 01-7.277-8.56c.597 3.645.908 7.386.908 11.198 0 14.938-4.767 28.771-12.862 40.059-8.095-11.288-12.862-25.121-12.862-40.059 0-3.812.31-7.553.908-11.198a69.19 69.19 0 01-7.277 8.56 68.503 68.503 0 01-37.42 19.231 68.508 68.508 0 0119.23-37.42 69.2 69.2 0 018.561-7.277 69.25 69.25 0 01-11.199.908c-14.937 0-28.77-4.767-40.058-12.862 11.288-8.095 25.121-12.862 40.058-12.862 3.813 0 7.554.31 11.199.908a69.2 69.2 0 01-8.561-7.277 68.508 68.508 0 01-19.23-37.42 68.508 68.508 0 0137.42 19.23 69.2 69.2 0 017.277 8.561z" fill="#b362ff"/>
            <path d="M60.583 60.583a61.241 61.241 0 01-4.532-8.842 60.588 60.588 0 01-3.048-37.083 60.588 60.588 0 0124.066 28.377 61.298 61.298 0 013.048 9.457 61.19 61.19 0 013.048-9.457 60.588 60.588 0 0124.066-28.377 60.595 60.595 0 01-3.048 37.083 61.342 61.342 0 01-4.532 8.842 61.19 61.19 0 018.842-4.532 60.585 60.585 0 0137.082-3.048 60.586 60.586 0 01-28.376 24.066 61.298 61.298 0 01-9.457 3.048 61.19 61.19 0 019.457 3.048 60.586 60.586 0 0128.376 24.066 60.593 60.593 0 01-37.082-3.048 61.29 61.29 0 01-8.842-4.532 61.29 61.29 0 014.532 8.842 60.593 60.593 0 013.048 37.082 60.586 60.586 0 01-24.066-28.376 61.19 61.19 0 01-3.048-9.457 61.298 61.298 0 01-3.048 9.457 60.586 60.586 0 01-24.066 28.376 60.585 60.585 0 013.048-37.082 61.19 61.19 0 014.532-8.842 61.342 61.342 0 01-8.842 4.532 60.595 60.595 0 01-37.083 3.048 60.588 60.588 0 0128.377-24.066 61.19 61.19 0 019.457-3.048 61.298 61.298 0 01-9.457-3.048 60.588 60.588 0 01-28.377-24.066 60.588 60.588 0 0137.083 3.048 61.241 61.241 0 018.842 4.532z" fill="#f7b7da"/>
            <path d="M72.161 72.161a24.81 24.81 0 01-1.846-3.602 24.677 24.677 0 01-1.242-15.104 24.678 24.678 0 019.802 11.558 24.941 24.941 0 011.242 3.852 24.936 24.936 0 011.241-3.852 24.683 24.683 0 019.802-11.558 24.677 24.677 0 01-1.241 15.104 25.01 25.01 0 01-1.846 3.602 24.81 24.81 0 013.602-1.846 24.677 24.677 0 0115.104-1.242 24.678 24.678 0 01-11.558 9.802 24.941 24.941 0 01-3.852 1.242c1.295.303 2.583.716 3.852 1.241a24.683 24.683 0 0111.558 9.802 24.677 24.677 0 01-15.104-1.241 25.01 25.01 0 01-3.602-1.846 25.01 25.01 0 011.846 3.602 24.677 24.677 0 011.241 15.104 24.683 24.683 0 01-9.802-11.558 24.936 24.936 0 01-1.241-3.852 24.941 24.941 0 01-1.242 3.852 24.678 24.678 0 01-9.802 11.558 24.677 24.677 0 011.242-15.104 24.81 24.81 0 011.846-3.602 25.01 25.01 0 01-3.602 1.846 24.677 24.677 0 01-15.104 1.241 24.683 24.683 0 0111.558-9.802 24.936 24.936 0 013.852-1.241 24.941 24.941 0 01-3.852-1.242 24.678 24.678 0 01-11.558-9.802 24.677 24.677 0 0115.104 1.242 24.81 24.81 0 013.602 1.846zm7.956 7.956" fill="#ff8976"/>
            </symbol>
            <symbol id="leaf">
                <path d="M0 0s35.207 162.973 78.735 214c72.569 85.068 57.825-34.902 45.407-34C55.921 184.955 0 0 0 0z"/>
            </symbol>
        </svg> 
        <div className="bg">
        <div className="semi-pad pad__6">
        <div className="semi-pad--left"></div>
        <div className="semi-pad--right"></div>
        </div>
        <div className="semi-pad pad__5">
        <div className="semi-pad--left"></div>
        <div className="semi-pad--right"></div>
        </div>
        <div className="pad pad--alt pad__3"></div>
        <div className="pad pad--alt pad__4"></div>
        <div className="pad pad__1"></div>
        <div className="pad pad__2">
        <svg className="flower">
        <use href="#flower" />
        </svg> 
        </div>
        <div className="pad pad__7">
        <svg className="flower">
        <use href="#flower" />
        </svg> 
        </div>
        <div className="pad pad__8">
            <img className="pad-frog pad-frog--reversed" src='/frog-2.png'/>
        </div>
        <div className="pad pad__9"></div>
        <div className="pad pad__10"></div>
        
        <div className="pad  pad__11">
        </div>
        <div className="pad pad__12">
            <img className="pad-frog" src='/frog-1.png'/>
        </div>
        <div className="pad pad--alt pad__13">
        <svg className="flower">
            <use href="#flower" />
        </svg> 
        </div>
        <div className="semi-pad pad__14">
        <div className="semi-pad--left"></div>
        <div className="semi-pad--right"></div>
        </div>
        <div className="pad pad__15">
            <img className="pad-frog" src='/frog-3.png'/>
        </div>
        <div className="pad pad--alt pad__16">
            <img className="pad-frog pad-frog--reversed" src='/frog-4.png'/>
        </div>
        
        <div className="drop drop--1"></div>
        <div className="drop drop--2"></div>
        <div className="drop drop--3"></div>
        <div className="drop drop--4"></div>
        <div className="drop drop--5"></div>
        
        <div className="leaf__group--1">
        <div className="leaf leaf--1">
        <svg><use href="#leaf" /></svg>
        </div>
        <div className="leaf leaf--2">
        <svg><use href="#leaf" /></svg>
        </div>
        <div className="leaf leaf--3">
        <svg><use href="#leaf" /></svg>
        </div>
        </div>
        <div className="leaf__group--2">
        <div className="leaf leaf--4">
        <svg><use href="#leaf" /></svg>
        </div>
        <div className="leaf leaf--5">
        <svg><use href="#leaf" /></svg>
        </div>
        <div className="leaf leaf--6">
        <svg><use href="#leaf" /></svg>
        </div>
        <div className="leaf leaf--7">
        <svg><use href="#leaf" /></svg>
        </div>
        </div>
        <div className="leaf__group--3">
        <div className="leaf leaf--8">
        <svg><use href="#leaf" /></svg>
        </div>
        <div className="leaf leaf--9">
        <svg><use href="#leaf" /></svg>
        </div>
        <div className="leaf leaf--10">
        <svg><use href="#leaf" /></svg>
        </div>
        <div className="leaf leaf--11">
        <svg><use href="#leaf" /></svg>
        </div>
        </div>
        <div className="bg-image"></div>
        </div>
    </div>)
}

export default Lake;