import React from 'react';
import { Button } from '@ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ColorPicker = ({ onColorChange }: any) => {
    const { t } = useTranslation();

    const colors = [
        { name: 'Pink', value: 'pink' },
        { name: 'Gold', value: 'gold' },
        { name: 'Blue', value: 'blue' },
        { name: 'Green', value: 'green' },
    ];

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="hidden lg:block">
                    {t('chooseColorPallete')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className="grid grid-cols-2 gap-4">
                    {colors.map((color) => (
                        <button
                            key={color.value}
                            onClick={() => onColorChange(color.value)}
                            className={`bg-${color.value}-500 p-4 rounded-lg text-black`}
                        >
                            {color.name}
                        </button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ColorPicker;
