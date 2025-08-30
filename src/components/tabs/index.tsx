import React from'react';
import classNames from 'classnames';
import './index.css';

function Tabs(props: TabsProps) {
  const {
    tabsData,
    activeTab,
    onTabChange,
    disabledTabIndexes = [],
    orientaion = 'horizontal',
  } = props;

  return (
    <div
      className={classNames('flex gap-5', {
        'flex-row justify-start': orientaion ==='vertical',
        'flex-col': orientaion === 'horizontal',
      })}
    >
      <div
        className={classNames(
          'flex gap border border-solid border-gray',
          {
            'flex-col border-r': orientaion ==='vertical',
            'flex-row border-b': orientaion === 'horizontal',
          }
        )}
      >
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={classNames(
              'px py pr cursor-pointer',
              {
                'border-primary border-solid border-b border':
                  activeTab === index && orientaion === 'horizontal',
                'border-primary border-solid border-r border':
                  activeTab === index && orientaion ==='vertical',
                'opacity cursor-not-allowed pointer-events-none':
                  disabledTabIndexes.includes(index),
              }
            )}
            onClick={() => onTabChange(index)}
          >
            <span
              className={classNames('text-sm text-gray', {
                'text-primary': activeTab === index,
              })}
            >
              {tab.title}
            </span>
          </div>
        ))}
      </div>
      <div className="text-sm">{tabsData[activeTab].content}</div>
    </div>
  );
}

export default Tabs;

export interface TabsProps {
  tabsData: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  activeTab: number;
  onTabChange: (index: number) => void;
  disabledTabIndexes?: number[];
  orientaion?: 'horizontal' |'vertical';
}