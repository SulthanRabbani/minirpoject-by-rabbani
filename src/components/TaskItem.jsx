import { DropDownMenu } from "./Modal"
import { Completed, EightyPercent, FiftyPercent, FourtyPercent, Incompleted, NinetyPercent, SeventyPercent, SixtyPercent, TenPercent, ThirtyPercent, TwentyPercent } from "./ProgressBar"

export const NoTask = () => {
    return (
        <div className="flex flex-col">
            <div className="h-[40px] w-[294px] border-1 border mx-[16px] my-[8px] border-[#E0E0E0] items-center flex pl-[16px] text-sm rounded-md text-[#757575]">
                No Task
            </div>
        </div>
    )
}

export const Item = (props) => {
    let progressBar = <Incompleted />
    const Bar = props.progress
    switch (Bar) {
        case 10:
            progressBar = <TenPercent />
            break;
        case 20:
            progressBar = <TwentyPercent />
            break;
        case 30:
            progressBar = <ThirtyPercent />
            break;
        case 40:
            progressBar = <FourtyPercent />
            break;
        case 50:
            progressBar = <FiftyPercent />
            break;
        case 60:
            progressBar = <SixtyPercent />
            break;
        case 70:
            progressBar = <SeventyPercent />
            break;
        case 80:
            progressBar = <EightyPercent />
            break;
        case 90:
            progressBar = <NinetyPercent />
            break;
        case 100:
            progressBar = <Completed />
            break;
        default:
            break;
    }
    return (
        <>
            <div className="w-[298px] h-[120px] border border-1 ml-[16px] mr-[12px] mb-[12px] rounded-md bg-[#FAFAFA]">
                <p className="text-sm border-dashed border-b-2 px-[16px] pt-[16px] pb-[8px] font-nunito font-bold">{props.title}</p>
                <div className="flex flex-row items-center justify-between pt-[12px] mx-[16px]">
                    {progressBar}
                    <DropDownMenu />
                </div>
            </div>
        </>
    )
}