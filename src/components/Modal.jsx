import { Menu } from '@headlessui/react'
import { useState } from 'react'

export const TryHardModal = (props) => {
    return (
        <TryHardModal />
    )
}
export const DropDownDeleteModal = (props) => {
    return (
        <DeleteModal toggle={props.toggle} action={props.action} />
    )
}

export const DropDownEditModal = (props) => {
    return (
        <EditTaskModal toggle={props.toggle} action={props.action} />
    )
}

export const DeleteModal = (props) => {
    let modalState = props.toggle
    let action = props.action
    return (
        <>
            {modalState === true ?
                <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full backdrop-brightness-50">
                    <div className="h-[188px] w-[420px] drop-shadow-xl border rounded-xl font-nunito shadow-2xl bg-white">
                        <div className="flex flex-row items-center mt-[24px] px-[24px]">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 7V9M10 13H10.01M3.07183 17H16.9282C18.4678 17 19.4301 15.3333 18.6603 14L11.7321 2C10.9623 0.666667 9.03778 0.666667 8.26798 2L1.33978 14C0.56998 15.3333 1.53223 17 3.07183 17Z" stroke="#E11428" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="w-[308px] h-[28px] text-lg font-bold ml-[11px]">Delete Task</div>
                            <button onClick={action}>
                                <svg className="flex justify-end" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6 6L18 18" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className="px-[24px] mt-[16px] text-sm font-normal">Are you sure want to delete this task? your action can???t be reverted.</p>
                        <div className="flex flex-row mt-[16px] justify-end mr-[24px]">
                            <button onClick={action} className="w-[76px] h-[32px] text-sm font-bold border-2 rounded-md border-[#E0E0E0] hover:bg-[#E0E0E0]">Cancel</button>
                            <button className="w-[76px] h-[32px] ml-[10px] text-sm font-bold bg-[#E11428] text-white rounded-md hover:bg-opacity-70">Delete</button>
                        </div>
                    </div>
                </div> : ""}

        </>
    )
}

export const NewTaskModal = (props) => {
    let modalState = props.toggle
    let action = props.action
    return (
        <>
            {modalState === true ?
                <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full backdrop-brightness-50">
                    <div className="w-[420px] h-[311px] rounded-xl border font-nunito drop-shadow-xl shadow-2xl bg-white">
                        <div className="flex flex-row justify-between my-[24px] px-[24px]">
                            <p className="text-lg font-bold">Create Task</p>
                            <button onClick={action}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6 6L18 18" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className="pl-[24px] mb-2 text-xs font-bold">Task Name</p>
                        <input className="w-[383px] h-[36px] border-2 ml-[24px] mb-[16px] rounded-lg placeholder:py-1 placeholder:px-2" placeholder="Type your Task"></input>
                        <p className="ml-[24px] mb-2 text-xs font-bold">Progress</p>
                        <input className="w-[143px] h-[36px] ml-[24px] mb-[25px] border-2 rounded-lg placeholder:py-1 placeholder:px-2" placeholder="70%"></input>
                        <div className="flex flex-row justify-end">
                            <button onClick={action} className="w-[76px] h-[32px] text-sm font-bold border-2 rounded-md border-[#E0E0E0] hover:bg-[#E0E0E0]">Cancel</button>
                            <button className="w-[97px] h-[32px] bg-[#01959F] text-white font-bold text-sm rounded-md ml-[10px] mr-[24px] hover:bg-opacity-70">Save Task</button>
                        </div>
                    </div>
                </div>
                : ""}
        </>
    )
}

export const EditTaskModal = (props) => {
    let modalState = props.toggle
    let action = props.action
    return (
        <>
            {modalState === true ?
                <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full backdrop-brightness-50">
                    <div className="w-[420px] h-[311px] rounded-xl border font-nunito drop-shadow-xl shadow-2xl bg-white">
                        <div className="flex flex-row justify-between my-[24px] px-[24px]">
                            <p className="text-lg font-bold">Edit Task</p>
                            <button onClick={action}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6 6L18 18" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className="pl-[24px] mb-2 text-xs font-bold">Task Name</p>
                        <input className="w-[383px] h-[36px] border-2 ml-[24px] mb-[16px] rounded-lg placeholder:py-1 placeholder:px-2" placeholder="Type your Task"></input>
                        <p className="ml-[24px] mb-2 text-xs font-bold">Progress</p>
                        <input className="w-[143px] h-[36px] ml-[24px] mb-[25px] border-2 rounded-lg placeholder:py-1 placeholder:px-2" placeholder="70%"></input>
                        <div className="flex flex-row justify-end">
                            <button onClick={action} className="w-[76px] h-[32px] text-sm font-bold border-2 rounded-md border-[#E0E0E0] hover:bg-[#E0E0E0]">Cancel</button>
                            <button className="w-[97px] h-[32px] bg-[#01959F] text-white font-bold text-sm rounded-md ml-[10px] mr-[24px] hover:bg-opacity-70">Save Task</button>
                        </div>
                    </div>
                </div>
                : ""}
        </>
    )
}

export const TryHard = (props) => {
    let modalState = props.toggle
    let action = props.action
    return (
        <>
            {modalState === true ?
                <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full backdrop-brightness-50">
                    <div className="flex flex-col items-center justify-center p-5 bg-white border shadow-2xl w-fit h-fit rounded-xl font-nunito drop-shadow-xl">
                        <p className='mt-2 text-xl font-bold text-center animate-bounce'>
                            I'm still try my best for working on it :)
                        </p>
                        <button onClick={action} className="w-[97px] h-[32px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-extrabold text-sm rounded-md mt-4 hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500">Close</button>
                    </div>
                </div>
                :
                ""}
        </>
    )
}

export const DropDownMenu = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [tryHardModal, setTryHardModal] = useState(false)

    const handleTryHardModal = () => {
        setTryHardModal(!tryHardModal)
    }
    const HandleDeleteModal = () => {
        setDeleteModal(!deleteModal)
    }
    const HandleEditModal = () => {
        setEditModal(!editModal)
    }
    return (
        <>
            <Menu>
                <Menu.Button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Menu.Button>
                <Menu.Items className="w-[320px] h-[160px] border rounded-lg shadow-lg bg-[#FFFFFF] fixed ml-[200px] mt-[130px] p-1 my-[14px] text-sm font-nunito font-semibold">
                    <Menu.Item>
                        <button onClick={handleTryHardModal} className='flex px-[16px] justify-center items-center my-[14px] hover:text-[#01959F]'>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4538 6.80069L11.4537 6.80073L11.4575 6.80994C11.5075 6.93167 11.5075 7.06821 11.4575 7.18994L11.4574 7.1899L11.4538 7.19919C11.4306 7.25916 11.396 7.31406 11.3519 7.36091L6.35644 12.3564L6.355 12.3578C6.30852 12.4047 6.25321 12.4419 6.19229 12.4673C6.13136 12.4927 6.06601 12.5057 6 12.5057C5.93399 12.5057 5.86864 12.4927 5.80771 12.4673C5.74679 12.4419 5.69148 12.4047 5.645 12.3578L5.6421 12.3549C5.59524 12.3085 5.55804 12.2532 5.53266 12.1922C5.50727 12.1313 5.4942 12.0659 5.4942 11.9999C5.4942 11.9339 5.50727 11.8686 5.53266 11.8077C5.55804 11.7467 5.59524 11.6914 5.6421 11.6449L5.64302 11.644L8.94302 8.35403L9.7997 7.49994H8.59H1C0.867392 7.49994 0.740215 7.44726 0.646447 7.35349C0.552678 7.25973 0.5 7.13255 0.5 6.99994C0.5 6.86733 0.552678 6.74016 0.646447 6.64639C0.740215 6.55262 0.867392 6.49994 1 6.49994H8.59H9.7997L8.94302 5.64585L5.64355 2.35639C5.6435 2.35633 5.64345 2.35628 5.64339 2.35623C5.54896 2.26171 5.49591 2.13356 5.49591 1.99994C5.49591 1.93374 5.50895 1.86819 5.53428 1.80703C5.55961 1.74588 5.59674 1.6903 5.64355 1.64349C5.73809 1.54896 5.86631 1.49585 6 1.49585C6.0662 1.49585 6.13175 1.50889 6.19291 1.53422C6.25407 1.55955 6.30964 1.59669 6.35645 1.64349L6.70831 1.29163L6.35645 1.64349L11.3519 6.63897C11.396 6.68582 11.4306 6.74073 11.4538 6.80069Z" fill="#333333" stroke="#333333" />
                            </svg>
                            <p className='ml-[22px]'>Move Right</p>
                        </button>
                    </Menu.Item>
                    <Menu.Item>
                        <button onClick={handleTryHardModal} className='flex px-[16px] justify-center items-center mt-[12px] hover:text-[#01959F]'>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.05688 5.64585L2.20019 6.49994H3.4099H10.9999C11.1325 6.49994 11.2597 6.55262 11.3534 6.64639C11.4472 6.74016 11.4999 6.86733 11.4999 6.99994C11.4999 7.13255 11.4472 7.25973 11.3534 7.35349C11.2597 7.44726 11.1325 7.49994 10.9999 7.49994H3.4099H2.20019L3.05688 8.35403L6.35688 11.644L6.3578 11.6449C6.40466 11.6914 6.44186 11.7467 6.46724 11.8077C6.49263 11.8686 6.50569 11.9339 6.50569 11.9999C6.50569 12.0659 6.49263 12.1313 6.46724 12.1922C6.44186 12.2532 6.40466 12.3085 6.3578 12.3549L6.35778 12.3549L6.3549 12.3578C6.30841 12.4047 6.25311 12.4419 6.19218 12.4673C6.13126 12.4927 6.06591 12.5057 5.9999 12.5057C5.93389 12.5057 5.86854 12.4927 5.80761 12.4673C5.74668 12.4419 5.69138 12.4047 5.6449 12.3578L5.64345 12.3564L0.647971 7.36091C0.603933 7.31407 0.569333 7.25916 0.546081 7.19919L0.546173 7.19915L0.54239 7.18994C0.492381 7.06821 0.492381 6.93167 0.54239 6.80994L0.542481 6.80998L0.546081 6.80069C0.569333 6.74073 0.603933 6.68582 0.64797 6.63897L5.64345 1.64349L5.29173 1.29177L5.64345 1.64349C5.73799 1.54896 5.8662 1.49585 5.9999 1.49585C6.13359 1.49585 6.26181 1.54896 6.35634 1.64349C6.45088 1.73803 6.50399 1.86625 6.50399 1.99994C6.50399 2.13356 6.45094 2.26171 6.3565 2.35623C6.35645 2.35628 6.3564 2.35633 6.35634 2.35639L3.05688 5.64585Z" fill="#333333" stroke="#333333" />
                            </svg>
                            <p className='ml-[22px]'>Move Left</p>
                        </button>
                    </Menu.Item>
                    <Menu.Item>
                        <button onClick={HandleEditModal} className='flex px-[16px] justify-center items-center mt-[12px] hover:text-[#01959F]'>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.24289 16.4999L7.24289 16.4999H7.24H3C2.86739 16.4999 2.74021 16.4473 2.64645 16.3535C2.55268 16.2597 2.5 16.1325 2.5 15.9999L2.50001 11.7599L2.49999 11.757C2.49961 11.6912 2.51222 11.626 2.53711 11.5651C2.56186 11.5045 2.59826 11.4494 2.64426 11.4028C2.6445 11.4025 2.64475 11.4023 2.64499 11.402L9.5833 4.47375L9.58418 4.47287L12.4042 1.64287L12.405 1.64204C12.4515 1.59517 12.5068 1.55798 12.5677 1.53259C12.6286 1.50721 12.694 1.49414 12.76 1.49414C12.826 1.49414 12.8914 1.50721 12.9523 1.53259C13.0131 1.55794 13.0684 1.59508 13.1148 1.64185C13.1149 1.64192 13.1149 1.64198 13.115 1.64204L17.3544 5.93141L17.3544 5.93143L17.3579 5.93494C17.4048 5.98142 17.442 6.03672 17.4673 6.09765C17.4927 6.15858 17.5058 6.22393 17.5058 6.28994C17.5058 6.35595 17.4927 6.4213 17.4673 6.48223C17.4421 6.54276 17.4052 6.59773 17.3588 6.64403C17.3585 6.64433 17.3582 6.64464 17.3579 6.64494L14.5202 9.42263L14.5202 9.42261L14.5162 9.42664L7.59789 16.3549C7.59767 16.3552 7.59744 16.3554 7.59722 16.3556C7.55064 16.4016 7.49547 16.4381 7.43484 16.4628C7.37393 16.4877 7.30869 16.5003 7.24289 16.4999ZM13.1136 3.05639L12.76 2.70283L12.4064 3.05639L10.9864 4.47639L10.6329 4.82994L10.9864 5.18349L13.8164 8.01349L14.17 8.36705L14.5236 8.01349L15.9436 6.59349L16.2971 6.23994L15.9436 5.88639L13.1136 3.05639ZM3.64645 11.8164L3.5 11.9628V12.1699V14.9999V15.4999H4H6.83H7.03711L7.18355 15.3535L13.1136 9.42349L13.4671 9.06994L13.1136 8.71639L10.2836 5.88639L9.93 5.53283L9.57645 5.88639L3.64645 11.8164ZM1 19.4999H19C19.1326 19.4999 19.2598 19.5526 19.3536 19.6464C19.4473 19.7402 19.5 19.8673 19.5 19.9999C19.5 20.1325 19.4473 20.2597 19.3536 20.3535C19.2598 20.4473 19.1326 20.4999 19 20.4999H1C0.867391 20.4999 0.740214 20.4473 0.646446 20.3535C0.552679 20.2597 0.5 20.1325 0.5 19.9999C0.5 19.8673 0.552679 19.7402 0.646446 19.6464C0.740214 19.5526 0.867391 19.4999 1 19.4999Z" fill="#333333" stroke="#333333" />
                            </svg>
                            <p className='ml-[22px]'>Edit</p>
                        </button>
                    </Menu.Item>
                    <Menu.Item>
                        <button onClick={HandleDeleteModal} className='flex px-[16px] justify-center items-center mt-[12px] hover:text-red-500'>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 4V4.5H13H17C17.1326 4.5 17.2598 4.55268 17.3536 4.64645C17.4473 4.74021 17.5 4.86739 17.5 5C17.5 5.13261 17.4473 5.25979 17.3536 5.35355C17.2598 5.44732 17.1326 5.5 17 5.5H16H15.5V6V17C15.5 17.663 15.2366 18.2989 14.7678 18.7678C14.2989 19.2366 13.663 19.5 13 19.5H5C4.33696 19.5 3.70107 19.2366 3.23223 18.7678C2.76339 18.2989 2.5 17.663 2.5 17V6V5.5H2H1C0.867392 5.5 0.740215 5.44732 0.646447 5.35355C0.552678 5.25979 0.5 5.13261 0.5 5C0.5 4.86739 0.552678 4.74021 0.646447 4.64645C0.740215 4.55268 0.867392 4.5 1 4.5H5H5.5V4V3C5.5 2.33696 5.76339 1.70107 6.23223 1.23223C6.70107 0.763392 7.33696 0.5 8 0.5H10C10.663 0.5 11.2989 0.763392 11.7678 1.23223C12.2366 1.70107 12.5 2.33696 12.5 3V4ZM11 4.5H11.5V4V3C11.5 2.60217 11.342 2.22064 11.0607 1.93934C10.7794 1.65804 10.3978 1.5 10 1.5H8C7.60217 1.5 7.22064 1.65804 6.93934 1.93934C6.65804 2.22064 6.5 2.60217 6.5 3V4V4.5H7H11ZM4 5.5H3.5V6V17C3.5 17.3978 3.65804 17.7794 3.93934 18.0607C4.22065 18.342 4.60218 18.5 5 18.5H13C13.3978 18.5 13.7794 18.342 14.0607 18.0607C14.342 17.7794 14.5 17.3978 14.5 17V6V5.5H14H4ZM7.35355 15.3536C7.25979 15.4473 7.13261 15.5 7 15.5C6.86739 15.5 6.74021 15.4473 6.64645 15.3536C6.55268 15.2598 6.5 15.1326 6.5 15V9C6.5 8.86739 6.55268 8.74022 6.64645 8.64645C6.74022 8.55268 6.86739 8.5 7 8.5C7.13261 8.5 7.25978 8.55268 7.35355 8.64645C7.44732 8.74022 7.5 8.86739 7.5 9V15C7.5 15.1326 7.44732 15.2598 7.35355 15.3536ZM11.3536 15.3536C11.2598 15.4473 11.1326 15.5 11 15.5C10.8674 15.5 10.7402 15.4473 10.6464 15.3536C10.5527 15.2598 10.5 15.1326 10.5 15V9C10.5 8.86739 10.5527 8.74022 10.6464 8.64645C10.7402 8.55268 10.8674 8.5 11 8.5C11.1326 8.5 11.2598 8.55268 11.3536 8.64645C11.4473 8.74022 11.5 8.86739 11.5 9V15C11.5 15.1326 11.4473 15.2598 11.3536 15.3536Z" fill="#333333" stroke="#333333" />
                            </svg>
                            <p className='ml-[22px]'>Delete</p>
                        </button>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
            <DropDownDeleteModal toggle={deleteModal} action={HandleDeleteModal} />
            <DropDownEditModal toggle={editModal} action={HandleEditModal} />
            <TryHard toggle={tryHardModal} action={handleTryHardModal} />

        </>
    )
}