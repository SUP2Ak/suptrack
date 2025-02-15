import { useState } from "react";
import { Popover, Stack, TextInput, UnstyledButton } from "@mantine/core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";

interface IconPickerProps {
  value: string;
  onChange: (icon: string) => void;
  label?: string;
}

function IconPicker(
  { value, onChange, label = "Choisir une icône" }: IconPickerProps,
) {
  const [search, setSearch] = useState("");
  const [opened, setOpened] = useState(false);
  const [selectedType, setSelectedType] = useState<
    "solid" | "regular" | "brands"
  >("solid");
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const getIconList = () => {
    let icons: { [key: string]: any };
    switch (selectedType) {
      case "regular":
        icons = far;
        break;
      case "brands":
        icons = fab;
        break;
      default:
        icons = fas;
    }
    return Object.keys(icons).filter((icon) =>
      icon.toLowerCase().includes(search.toLowerCase())
    );
  };

  const iconList = getIconList();

  return (
    <Popover opened={opened} onChange={setOpened}>
      <Popover.Target>
        <UnstyledButton
          onClick={() => setOpened(true)}
          style={{
            padding: "8px",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {value
            ? (
              <>
                <Icon name={value} size="1x" />
                <span>{value}</span>
              </>
            )
            : label}
        </UnstyledButton>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack>
          <div style={{ display: "flex", gap: "8px" }}>
            <UnstyledButton
              onClick={() => setSelectedType("solid")}
              style={{
                padding: "8px",
                backgroundColor: selectedType === "solid"
                  ? "#f0f0f0"
                  : "transparent",
                borderRadius: "4px",
              }}
            >
              Solid
            </UnstyledButton>
            <UnstyledButton
              onClick={() => setSelectedType("regular")}
              style={{
                padding: "8px",
                backgroundColor: selectedType === "regular"
                  ? "#f0f0f0"
                  : "transparent",
                borderRadius: "4px",
              }}
            >
              Regular
            </UnstyledButton>
            <UnstyledButton
              onClick={() => setSelectedType("brands")}
              style={{
                padding: "8px",
                backgroundColor: selectedType === "brands"
                  ? "#f0f0f0"
                  : "transparent",
                borderRadius: "4px",
              }}
            >
              Brands
            </UnstyledButton>
          </div>

          <TextInput
            placeholder="Rechercher une icône"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div
            style={{
              maxHeight: "300px",
              overflow: "auto",
              width: "300px",
              padding: "8px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "8px",
              }}
            >
              {iconList.map((icon) => (
                <UnstyledButton
                  key={icon}
                  onClick={() => {
                    onChange(icon);
                    setOpened(false);
                  }}
                  onMouseEnter={() => setHoveredIcon(icon)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: value === icon ? "#f0f0f0" : "transparent",
                    fontSize: "20px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    ":hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <Icon name={icon} size="1x" />
                </UnstyledButton>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #e0e0e0",
              padding: "8px",
              minHeight: "36px",
              textAlign: "center",
            }}
          >
            {hoveredIcon || "\u00A0"}
          </div>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}

export default IconPicker;
