import Image from 'next/image';

interface props {
  title: string;
  body: string;
  Icon: string;
  stepsTitle: any;
  btnComponent: Function;
  theme: any;
  width: string;
}
export default function Cards({
  title,
  Icon,
  stepsTitle,
  body,
  btnComponent,
  theme,
  width,
}: props) {
  return (
    <div
      className={`m-5 max-w-xs text-left rounded-lg  border-2 border-gray-200 ${
        width ? width : 'w-96'
      } relative pt-3 bg-white`}
    >
      <div className="px-4">
        <div className="w-8">
          <Icon />
        </div>
      </div>
      <div className="text-m p-4 max-w-xs font-semibold text-gray-700">
        {title}
      </div>
      <div className="max-w-xs text-left">
        <div className=" px-4 text-gray-500">
          <div className="text-sm max-w-xs h-32">
            <p className="text-sm max-w-xs">{body}</p>
            <p className="text-sm max-w-xs py-2">{stepsTitle}</p>
          </div>
        </div>
      </div>
      <div className="p-4 flex w-100">{btnComponent()}</div>
    </div>
  );
}
