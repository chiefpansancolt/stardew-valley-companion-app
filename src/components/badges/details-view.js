import Badge from "@/components/badges/badge";
import LinkBadge from "@/components/badges/link-badge";

export default function DetailsView({ achievement, showStat, showPercent, fontSize }) {
  return (
    <div className={fontSize}>
      {(showStat || achievement.linkType !== "Link") && !achievement.completed && (
        <>
          <span>
            {Intl.NumberFormat().format(achievement.current)} /{" "}
            {Intl.NumberFormat().format(achievement.count)}
          </span>
          {showPercent && <span>{" - " + achievement.percent + "%"}</span>}
        </>
      )}
      {achievement.completed && <Badge label="Completed" isSuccess={true} />}
      {!showStat && achievement.linkType === "Link" && !achievement.completed && (
        <LinkBadge link={achievement.detailLink} label="View Details" />
      )}
    </div>
  );
}
