import { CustomButton, Icon } from "@/components";
import { dictionary } from "@/utils/dictionary";
import { Metadata } from "next";
import Link from "next/link";
import { gameType } from "../../../../types";
import { getQuestById } from "../../actions";

export async function generateMetadata({
  params,
}: {
  params: { questId: string };
}): Promise<Metadata> {
  const questId = params?.questId;

  if (!questId) return { title: "Квест не найден", description: "" };

  const quest = (await getQuestById(questId)) as gameType;
  return {
    title: quest?.title,
    description: quest?.description,
  };
}

export default async function Quest({
  params,
}: {
  params: { questId: string };
}) {
  const quest = await getQuestById(params.questId) as gameType;

  const bgStyle = {
    backgroundImage: `url('/${quest.coverImg}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <main className=" h-full min-h-screen pt-[74px] flex" style={bgStyle}>
      <div className="flex justify-end items-center">
        <div className="w-1/2 pt-[77px] pb-10">
          <div className="flex flex-col ">
            <p className="text-sm font-medium text-_F2890F mb-2">
              {dictionary[quest.type]}
            </p>
            <h2 className="text-[64px] font-[800] text-_FFFFFF mb-8 w-full ">
              {quest.title}
            </h2>
          </div>

          <div className="ml-[15px] flex flex-col">
            <div className="-ml-6 mb-5 flex gap-3 text-_E6E6E6 text-[14px] font-normal">
              <div className="flex items-center gap-1 px-6 border-r-[1px] border-_FFFFF">
                <Icon name="icons/clock" width={24} height={24} />
                <p>{quest.duration + " мин"}</p>
              </div>
              <div className="flex items-center gap-1 px-6 border-r-[1px] border-_FFFFF">
                <Icon name="icons/person" width={13} height={16} />
                <p>
                  {quest.peopleCount[0] +
                    "-" +
                    quest.peopleCount[1] +
                    " человек"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="icons/puzzle" width={16} height={16} />
                <p>{quest.level}</p>
              </div>
            </div>
            <p className="text-[15px] text-_E6E6E6 font-medium mr-[135px] mb-10">
              {quest.description}
            </p>

            <Link href={`/quests/${params.questId}/form`}>
              <CustomButton title="ЗАБРОНИРОВАТЬ" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
