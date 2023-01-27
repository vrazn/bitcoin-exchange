'use client';

import { memo } from 'react';

interface ButtonProps {
  title: string;
  value: number | string;
}

export interface ButtonGroupProps {
  name: string;
  buttons: ButtonProps[];
  value: ButtonProps['value'];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Group = ({ name, buttons, value, onChange }: ButtonGroupProps) => {
  return (
    <div className="btn-group">
      {buttons.map((button, index) => {
        return (
          <input
            data-testid={`btn-group-${index}`}
            key={`btn-group-${index}`}
            name={name}
            className="btn"
            type="radio"
            value={button.value}
            data-title={button.title}
            defaultChecked={button.value === value}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export const ButtonGroup = memo(Group);
